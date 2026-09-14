import React from 'react';

import {
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

import NeZha from './janelas/NeZha';
import Zootopia from './janelas/Zootopia';
import FireandAsh from './janelas/FireandAsh';
import LiloStitch from './janelas/Lilo&Stitch';
import Minecraft from './janelas/Minecraft';

import estilo from './css/estilo';

export default function App() {

  const [tela, setTela] = React.useState('home');

  if (tela === 'NeZha') {
    return <NeZha voltar={() => setTela('home')} />;
  }

  if (tela === 'Zootopia') {
    return <Zootopia voltar={() => setTela('home')} />;
  }

  if (tela === 'FireandAsh') {
    return <FireandAsh voltar={() => setTela('home')} />;
  }

  if (tela === 'LiloStitch') {
    return <LiloStitch voltar={() => setTela('home')} />;
  }

  if (tela === 'Minecraft') {
    return <Minecraft voltar={() => setTela('home')} />;
  }

  return (
    <ScrollView style={[estilo.container, { backgroundColor: '#121212' }]}>

      <Text style={[estilo.titulo, { color: '#FFFFFF' }]}>
        Filmes Mais Assistidos de 2025
      </Text>


      {/* NE ZHA 2 */}
      <TouchableOpacity
        style={[estilo.card, { backgroundColor: '#1E1E1E' }]}
        onPress={() => setTela('NeZha')}
      >
        <Image
          source={require('./img/nezha-capa.jpg')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />

        <Text style={[estilo.nomeFilme, { color: '#FFFFFF' }]}>
          Ne Zha 2
        </Text>
      </TouchableOpacity>


      {/* ZOOTOPIA 2 */}
      <TouchableOpacity
        style={[estilo.card, { backgroundColor: '#1E1E1E' }]}
        onPress={() => setTela('Zootopia')}
      >
        <Image
          source={require('./img/zootopia.jpg')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />

        <Text style={[estilo.nomeFilme, { color: '#FFFFFF' }]}>
          Zootopia 2
        </Text>
      </TouchableOpacity>


      {/* AVATAR: FIRE AND ASH */}
      <TouchableOpacity
        style={[estilo.card, { backgroundColor: '#1E1E1E' }]}
        onPress={() => setTela('FireandAsh')}
      >
        <Image
          source={require('./img/avatar.jpg')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />

        <Text style={[estilo.nomeFilme, { color: '#FFFFFF' }]}>
          Avatar: Fire and Ash
        </Text>
      </TouchableOpacity>


      {/* LILO & STITCH */}
      <TouchableOpacity
        style={[estilo.card, { backgroundColor: '#1E1E1E' }]}
        onPress={() => setTela('LiloStitch')}
      >
        <Image
          source={require('./img/lilo.jpg')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />

        <Text style={[estilo.nomeFilme, { color: '#FFFFFF' }]}>
          Lilo & Stitch
        </Text>
      </TouchableOpacity>


      {/* A MINECRAFT MOVIE */}
      <TouchableOpacity
        style={[estilo.card, { backgroundColor: '#1E1E1E' }]}
        onPress={() => setTela('Minecraft')}
      >
        <Image
          source={require('./img/minecraft.jpg')}
          style={{
            width: '100%',
            height: 380,
            resizeMode: 'cover',
          }}
        />

        <Text style={[estilo.nomeFilme, { color: '#FFFFFF' }]}>
          A Minecraft Movie
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}