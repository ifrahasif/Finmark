it("Login POST Request", () => {
    cy.request({
         method: 'POST',
         url: 'http://tst.finmark.com/api/v1/authenticate',
         body: {
            "emailAddress": "4349u@10pearls.com",
            "password": "Pearls1@"
          },
          headers: {
            "Accept": "*/*"
          }
        
    }).then((response) => { 
        expect(response.status).to.eq(200);
            //expect(response.body).has.property("fullName","Hassaan kg"); 
    })
})


it("Add Expense POST Request", () => {
    cy.request({
         method: 'POST',
         url: 'https://tst.finmark.com/api/v2/expenses?scenarioId=4469&companyId=1068',
         headers: {
            "Accept": "application/json, text/plain, */*",
            "authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MzQ5dUAxMHBlYXJscy5jb20iLCJleHAiOjE2NzM2MDgxMjcsImlhdCI6MTY3MzU5MzcyNywianRpIjoiZGFlZDU0YjUtNjM4Ny00ZWQ1LWI1YzYtYmY5ZDA3ZGU3ZGIxIn0.lUqFuJmTb1mCLvBvYRxHV-7ojEDYjR1dzOxBNMcLBJG9p0nfYYEYMnJy128Pjd0n2fUKx07Anidsrn9GsrkXHw",
          },
         body: {
            accountId: null,
            active: true,
            changeAmount: null,
            changeFrequency: null,
            changeOverTime: false,
            customFormula: null,
            departmentId: 2,
            endDate: null,
            errorMessage: "",
            expenseAccountNum: "",
            expenseAmount: "1200",
            expenseChangeType: 1,
            expenseClassId: 1,
            expenseGroupCriteria: null,
            expenseType: 0,
            formulaValidationMsg: "",
            frequency: 0,
            initialAmount: null,
            invoiceTiming: "UPFRONT",
            isFormulaValid: false,
            isUnsaved: true,
            name: "cypressExp22",
            parentId: null,
            paymentTerm: null,
            paymentTermId: "1",
            payroll: false,
            startDate: "2023-01-01",
            type: "Basic"  
          },   
         
    }).then((response) => { 
        expect(response.status).to.eq(201);
            //expect(response.body).has.property("fullName","Hassaan kg"); 
    })
})

it("Expense GET Request", () => {
    cy.request({
         method: 'GET',
         url: 'https://tst.finmark.com/api/v1/expenseClasses?scenarioId=4469&companyId=1068',
          headers: {
            "Accept": "*/*",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MzQ5dUAxMHBlYXJscy5jb20iLCJleHAiOjE2NzM2MDgxMjcsImlhdCI6MTY3MzU5MzcyNywianRpIjoiZGFlZDU0YjUtNjM4Ny00ZWQ1LWI1YzYtYmY5ZDA3ZGU3ZGIxIn0.lUqFuJmTb1mCLvBvYRxHV-7ojEDYjR1dzOxBNMcLBJG9p0nfYYEYMnJy128Pjd0n2fUKx07Anidsrn9GsrkXHw",
          }
        
    }).then((response) => { 
        expect(response.status).to.eq(200);
            //expect(response.body).has.property("fullName","Hassaan kg"); 
    })
})

it("Expense DELETE Request", () => {
    cy.request({
         method: 'DELETE',
         url: 'http://tst.finmark.com/api/v2/expenses/c665767a-dde1-4f32-9c9b-795b193a29c7?scenarioId=4443',
          headers: {
            "Accept": "*/*",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MzQ5dUAxMHBlYXJscy5jb20iLCJleHAiOjE2NzM2MDgxMjcsImlhdCI6MTY3MzU5MzcyNywianRpIjoiZGFlZDU0YjUtNjM4Ny00ZWQ1LWI1YzYtYmY5ZDA3ZGU3ZGIxIn0.lUqFuJmTb1mCLvBvYRxHV-7ojEDYjR1dzOxBNMcLBJG9p0nfYYEYMnJy128Pjd0n2fUKx07Anidsrn9GsrkXHw",
          }
        
    }).then((response) => { 
        expect(response.status).to.eq(500);
            //expect(response.body).has.property("fullName","Hassaan kg"); 
    })
})

it("Expense PUT Request", () => {
    cy.request({
         method: 'POST',
         url: 'https://tst.finmark.com/api/v2/expenses/list?scenarioId=4469&startDate=2022-01&endDate=2022-12&companyId=1068',
          headers: {
            "Accept": "*/*",
            "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MzQ5dUAxMHBlYXJscy5jb20iLCJleHAiOjE2NzM2MDgxMjcsImlhdCI6MTY3MzU5MzcyNywianRpIjoiZGFlZDU0YjUtNjM4Ny00ZWQ1LWI1YzYtYmY5ZDA3ZGU3ZGIxIn0.lUqFuJmTb1mCLvBvYRxHV-7ojEDYjR1dzOxBNMcLBJG9p0nfYYEYMnJy128Pjd0n2fUKx07Anidsrn9GsrkXHw",
          },
          body: {
            accountDeleted: false,
            accountId : null,
            active: true,
            changeAmount: null,
            changeFrequency: null,
            changeOverTime: false,
            creationDate: "2022-06-28T14:36:26.78504",
            customFormula: "78",
            departmentCode: "GENERAL",
            departmentId: 2,
            departmentName: "Administration",
            detailedName: null,
            endDate: null,
            expenseAccountNum : null,
            expenseAmount:  0,
            expenseChangeType: null,
            expenseClassId: 1,
            expenseClassName: "General & Administrative",
            expenseGroupCriteria: null,
            expenseGroupCriteriaString: null,
            expenseType : 1,
            faulted: false,
            frequency: 0,
           // hierarchy: ["ed62a38c-0cfe-45cb-9907-709026416ee0"],
            //0: "ed62a38c-0cfe-45cb-9907-709026416ee0",
            id: "ed62a38c-0cfe-45cb-9907-709026416ee0",
            initialAmount: null,
            invoiceTiming: "UPFRONT",
            isParentExpense: false,
            maxAmount: 1000,
            minAmount: 10,
            modifiedDate: "2023-01-13T08:07:28.59924",
            name: "CYPress1",
            parentId:  null,
            parentKeys: [],
            parentName: null,
            paymentTermId: 51,
            paymentTermName: "Non-cash (advanced)",
            payroll: false,
            scenarioId: 4469,
            startDate: "2022-01-01",
            type: "Basic",
          }
        
    }).then((response) => { 
        expect(response.status).to.eq(200);
            //expect(response.body).has.property("fullName","Hassaan kg"); 
    })
})

/*
"data":{"id":"1acea0c7-80ba-4904-bd52-5133dcfc15ac","expenseClassId":1,"expenseAmount":120,"startDate":"2023-01-01",
         "endDate":null,"active":true,"frequency":0,"departmentId":2,"name":"e111","creationDate":"2023-01-13T07:09:50.277858",
         "modifiedDate":"2023-01-13T07:09:50.277858","expenseType":0,"changeOverTime":false,"scenarioId":4469,"expenseGroupCriteria":null,
         "expenseGroupCriteriaString":null,"accountId":null,"type":"Basic","expenseClassName":"General & Administrative","departmentName":"Administration",
         "departmentCode":"GENERAL","changeFrequency":null,"expenseChangeType":null,"changeAmount":null,"expenseAccountNum":"","detailedName":null,
         "payroll":false,"paymentTermId":1,"paymentTermName":"Immediate","invoiceTiming":"UPFRONT","customFormula":null,"initialAmount":null,"faulted":false,
         "accountDeleted":false,"parentId":null,"parentName":null,"isParentExpense":false,"children":[],"minAmount":120,"maxAmount":120},"error":null,"success":true
         */