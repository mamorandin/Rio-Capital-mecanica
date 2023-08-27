function registerAttendance() {
    var employeeId = document.getElementById('employee-id').value;
    var date = document.getElementById('date').value;
    var timeIn = document.getElementById('time-in').value;
    var timeOut = document.getElementById('time-out').value;

    // Criar uma instância do objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar a solicitação
    xhr.open("POST", "attendance.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Definir a função de retorno de chamada
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("result").textContent = xhr.responseText;
        }
    };

    // Enviar a solicitação
    xhr.send("employeeId=" + employeeId + "&date=" + date + "&timeIn=" + timeIn + "&timeOut=" + timeOut);
}


    const submitBtn = document.getElementById('submitBtn');
    const infoTableBody = document.querySelector('#infoTable tbody');
    
    // Função para carregar dados da tabela do localStorage
    function loadTableFromLocalStorage() {
      const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
      
      tableData.forEach((item, index) => {
        const newRow = infoTableBody.insertRow();
        const nameCell = newRow.insertCell();
        const idsCell = newRow.insertCell();
        const dataCell = newRow.insertCell();
        const totsCell = newRow.insertCell();
        const actionCell = newRow.insertCell();
        
        nameCell.textContent = item.name;
        dataCell.textContent = item.date;
        idsCell.textContent = item.ids;
        totsCell.textContent = item.tots;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', () => {
          deleteRow(index);
        });
        actionCell.appendChild(deleteButton);
      });
    }
    
    // Função para adicionar uma nova linha na tabela
    function addRowToTable(name, ids, date, tots) {
      const newRow = infoTableBody.insertRow();
      const nameCell = newRow.insertCell();
      const idsCell = newRow.insertCell();
      const dataCell = newRow.insertCell();
      const totsCell = newRow.insertCell();
      const actionCell = newRow.insertCell();

      nameCell.textContent = name;
      dataCell.textContent = date;
      idsCell.textContent = ids;
      totsCell.textContent = tots;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Excluir';
      deleteButton.addEventListener('click', () => {
        deleteRow(newRow.rowIndex - 1);
      });
      actionCell.appendChild(deleteButton);

      // Salvar dados no localStorage
      const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
      tableData.push({ name, ids, date, tots });
      localStorage.setItem('tableData', JSON.stringify(tableData));
    }

    // Função para excluir uma linha da tabela
    function deleteRow(rowIndex) {
      infoTableBody.deleteRow(rowIndex);

      const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
      tableData.splice(rowIndex, 1);
      localStorage.setItem('tableData', JSON.stringify(tableData));
    }

    // Adicionar evento ao botão Enviar
    submitBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const ids = document.getElementById('ids').value;
      const date = document.getElementById('data').value;
      const tots = document.getElementById('tot').value;
      
      if (name && ids && date && tots) {
        addRowToTable(name, ids, date, tots);
      }
    });

    // Carregar a tabela ao carregar a página
    window.addEventListener('load', () => {
      loadTableFromLocalStorage();
    });
