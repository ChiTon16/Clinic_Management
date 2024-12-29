from urllib.parse import quote

from flask import Flask
from flask_login import LoginManager
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from itsdangerous import URLSafeTimedSerializer
import cloudinary

app = Flask(__name__)
app.config['SECRET_KEY'] = '1HV98N4L#&UNg?:E;82{Ef@Bftfpl9eC#DtTP~oJ"Pufpi|V)2&}_aqM/g?Pbp2'
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://root:admin123@localhost/clinic?charset=utf8mb4"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# Thêm cấu hình email
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Sử dụng Gmail hoặc thay thế bằng SMTP server khác
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'lev160804clone@gmail.com'  # Thay bằng email của bạn
app.config['MAIL_PASSWORD'] = 'ztjl xqir sfdv hgnb'  # Thay bằng mật khẩu email hoặc App Password
app.config['MAIL_DEFAULT_SENDER'] = 'lev160804clone@gmail.com'
app.config["SECURITY_PASSWORD_SALT"] = "fkslkfsdlkfnsdfnsfd"

# Giới hạn bệnh nhân
app.config['MAX_PATIENTS_PER_DAY'] = 3
app.config["CURRENT_YEAR"] = 2024
# Serializer để tạo token an toàn
serializer = URLSafeTimedSerializer(app.config['SECRET_KEY'])



db = SQLAlchemy(app=app)
login = LoginManager(app=app)

cloudinary.config(
	cloud_name="duwdx2tgu",
	api_key="646743949231237",
	api_secret="jbac0w3FuckWA57tHsMH45ljksA"
)
