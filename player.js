const players = [
    { 
        name: "Lionel Messi", 
        position: "Forward", 
        club: "Inter Miami", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg/220px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg", 
        info: "Widely regarded as one of the greatest footballers of all time, Messi has won multiple Ballon d'Or awards and has been a consistent force in both La Liga and international football." 
    },
    { 
        name: "Cristiano Ronaldo", 
        position: "Forward", 
        club: "Al Nassr", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/RonaldoAl-Nassr23.jpg/161px-RonaldoAl-Nassr23.jpg", 
        info: "A five-time Ballon d'Or winner, Ronaldo is known for his physicality, goal-scoring ability, and work ethic. He’s played for top clubs like Manchester United, Real Madrid, and Juventus." 
    },
    { 
        name: "Kylian Mbappé", 
        position: "Forward", 
        club: "Paris Saint-Germain", 
        image: "https://hamariweb.com/profiles/images/profile/9508-652-7201.jpg", 
        info: "One of the brightest young talents in football, Mbappé is known for his speed, dribbling, and finishing. He won the 2018 World Cup with France and is a key player for PSG." 
    },
    { 
        name: "Erling Haaland", 
        position: "Forward", 
        club: "Manchester City", 
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Erling_Haaland_2023.jpg", 
        info: "A goal-scoring machine, Haaland has quickly become one of the most feared strikers in the world, breaking records in the Premier League with Manchester City." 
    },
    { 
        name: "Robert Lewandowski", 
        position: "Forward", 
        club: "Barcelona", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2019147200143_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_2462_-_B70I0762_%28cropped%29_%28cropped%29.jpg/170px-2019147200143_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_2462_-_B70I0762_%28cropped%29_%28cropped%29.jpg", 
        info: "Lewandowski is known for his incredible goal-scoring consistency and is one of the top strikers in the world. He moved from Bayern Munich to Barcelona in 2022." 
    },
    { 
        name: "Kevin De Bruyne", 
        position: "Midfielder", 
        club: "Manchester City", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Kevin_De_Bruyne_201807092.jpg", 
        info: "De Bruyne is known for his vision, passing, and ability to control the tempo of a game. He has been a key player for Manchester City and Belgium's national team." 
    },
    { 
        name: "Neymar Jr", 
        position: "Forward", 
        club: "Al Hilal", 
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg", 
        info: "A Brazilian superstar, Neymar is known for his flair, creativity, and dribbling. He moved to Al Hilal after a successful spell at Barcelona and Paris Saint-Germain." 
    },
    { 
        name: "Mohamed Salah", 
        position: "Forward", 
        club: "Liverpool", 
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mohamed_Salah_2018.jpg", 
        info: "Salah is one of the best forwards in the world, with a reputation for his pace, technical ability, and clinical finishing. He has been a key player for Liverpool in recent years." 
    },
    { 
        name: "Luka Modrić", 
        position: "Midfielder", 
        club: "Real Madrid", 
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ISL-HRV_%287%29.jpg/640px-ISL-HRV_%287%29.jpg", 
        info: "Modrić is a world-class midfielder, known for his technical skills, vision, and ability to control games. He won the Ballon d'Or in 2018 and continues to excel with Real Madrid." 
    },
    { 
        name: "Karim Benzema", 
        position: "Forward", 
        club: "Al-Ittihad", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Karim_Benzema_wearing_Real_Madrid_home_kit_2021-2022.jpg", 
        info: "Benzema has been one of the most consistent strikers in European football, winning multiple Champions League titles with Real Madrid before making the move to Al-Ittihad." 
    },
    { 
        name: "Virgil van Dijk", 
        position: "Defender", 
        club: "Liverpool", 
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg", 
        info: "Van Dijk is one of the best defenders in the world, known for his strength, composure, and leadership at the back. He has been a key figure for both Liverpool and the Netherlands." 
    },
    { 
        name: "Sadio Mané", 
        position: "Forward", 
        club: "Al Nassr", 
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Sadio_Man%C3%A9_-_Persepolis_F.C._v_Al_Nassr_FC%2C_19_September_2023.jpg", 
        info: "Mané is known for his explosive pace, dribbling, and finishing. He was a key player for Liverpool before moving to Al Nassr, where he continues to impress." 
    },
    { 
        name: "Thibaut Courtois", 
        position: "Goalkeeper", 
        club: "Real Madrid", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Courtois_2018_%28cropped%29.jpg", 
        info: "One of the best goalkeepers in the world, Courtois has been a key player for Real Madrid, known for his shot-stopping ability and command of the box." 
    },
    { 
        name: "Harry Kane", 
        position: "Forward", 
        club: "Bayern Munich", 
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Harry_Kane_on_October_10%2C_2023.jpg", 
        info: "Kane is a world-class striker with a lethal goal-scoring record. After years at Tottenham, he moved to Bayern Munich, where he continues to find the back of the net regularly." 
    },
    { 
        name: "Jude Bellingham", 
        position: "Midfielder", 
        club: "Real Madrid", 
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/25th_Laureus_World_Sports_Awards_-_Red_Carpet_-_Jude_Bellingham_-_240422_190551-2_%28cropped%29.jpg", 
        info: "A young and highly talented midfielder, Bellingham has been making waves at Real Madrid with his mature performances and potential to become one of the best in the world." 
    }
];

const playerListElement = document.getElementById("player-list");

players.forEach(player => {
    const playerItem = document.createElement("li");
    playerItem.classList.add("player-item");

    playerItem.innerHTML = `
        <img src="${player.image}" alt="${player.name}">
        <div>
            <div class="player-name">${player.name}</div>
            <div class="player-info">Position: ${player.position} | Club: ${player.club}</div>
            <p class="player-details">${player.info}</p>
        </div>
    `;

    playerListElement.appendChild(playerItem);
});
