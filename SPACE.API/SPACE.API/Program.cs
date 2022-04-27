using SPACE.API.SPACE.API.DataLogic;

// WebApp builder
var builder = WebApplication.CreateBuilder(args);

// Connection String
string connectionString = builder.Configuration["ConnectionString"];
//string connectionString = builder.Configuration.GetConnectionString("ConnectionString");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IRepository>(sp => new SQLRepository(connectionString, sp.GetRequiredService<ILogger<SQLRepository>>()));

// Build WebApp
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
