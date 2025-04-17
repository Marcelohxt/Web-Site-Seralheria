# Generated by Django 5.2 on 2025-04-16 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Depoimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_cliente', models.CharField(max_length=100)),
                ('cargo', models.CharField(blank=True, max_length=100)),
                ('foto', models.ImageField(blank=True, upload_to='depoimentos/')),
                ('texto', models.TextField()),
                ('cidade', models.CharField(max_length=100)),
                ('ativo', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='InformacaoContato',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('endereco', models.TextField()),
                ('telefone', models.CharField(max_length=20)),
                ('whatsapp', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('horario_funcionamento', models.TextField()),
                ('mapa_embed', models.TextField(blank=True, help_text='Código de incorporação do Google Maps')),
            ],
            options={
                'verbose_name': 'Informação de Contato',
                'verbose_name_plural': 'Informações de Contato',
            },
        ),
        migrations.CreateModel(
            name='ProjetoPorfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('descricao', models.TextField()),
                ('imagem', models.ImageField(upload_to='portfolio/')),
                ('data_realizacao', models.DateField()),
                ('ordem', models.IntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Projeto do Portfólio',
                'verbose_name_plural': 'Projetos do Portfólio',
                'ordering': ['ordem'],
            },
        ),
        migrations.CreateModel(
            name='Servico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=100)),
                ('descricao', models.TextField()),
                ('icone', models.CharField(max_length=50)),
                ('ordem', models.IntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Serviço',
                'verbose_name_plural': 'Serviços',
                'ordering': ['ordem'],
            },
        ),
    ]
