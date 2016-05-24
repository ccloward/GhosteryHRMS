CREATE TABLE [dbo].[Employee] (
    [Id]           BIGINT          NOT NULL,
    [FirstName]    NVARCHAR (50)   NULL,
    [MiddleName]   NVARCHAR (50)   NULL,
    [LastName]     NVARCHAR (50)   NULL,
    [SSN]          BIGINT          NULL,
    [BirthDate]    DATETIME        NULL,
    [Telephone]    NVARCHAR(50)          NULL,
    [Email]        NVARCHAR (MAX)  NULL,
    [Address1]     NVARCHAR (MAX)  NULL,
    [Address2]     NVARCHAR (MAX)  NULL,
    [Address3]     NVARCHAR (MAX)  NULL,
    [City]         NVARCHAR (50)   NULL,
    [State]        NVARCHAR (50)   NULL,
    [Zip]          BIGINT          NULL,
    [AnnualSalary] DECIMAL (18, 2) NULL,
    [Department]   NVARCHAR (MAX)  NULL,
    [Supervisor]   NVARCHAR (MAX)  NULL,
    [HireDate]     DATETIME        NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

