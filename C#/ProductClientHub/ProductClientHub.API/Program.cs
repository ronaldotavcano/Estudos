var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
<<<<<<< HEAD
// só abre o swagger se for desenvolvimento
=======
>>>>>>> 43a0b8715a630a7737922e068fc48416e3821889
if (app.Environment.IsDevelopment())
{
app.UseSwagger();
app.UseSwaggerUI();
    
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
