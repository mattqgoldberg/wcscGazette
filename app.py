from flask import Flask, render_template
import json

app = Flask(__name__)

with open('people.json', 'r') as file:
    people = json.load(file)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/meet-the-team")
def meetTheTeam():
    return render_template("meet-the-team.html", people=people)

@app.route("/meet-the-team/<id>")
def meetTeamMember(id):
    print(id)
    return render_template("meet-team-member.html", person=people[int(id)]) 

if __name__ == "__main__":
    app.run()
