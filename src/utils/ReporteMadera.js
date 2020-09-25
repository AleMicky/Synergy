import React from 'react';
import { Document, Page, StyleSheet, Text, View, Image } from '@react-pdf/renderer';
import logo from '../assets/Logo.png'
export const ReporteMadera = ({ resultado, m2Azul, operacion,tipo }) => {
    console.log(resultado);
    const titulo =  s=> {
        return s && s[0].toUpperCase() + s.slice(1)
    }
    return (
        <Document>
            <Page style={styles.body}>
                <Image style={styles.image}
                    src={logo} />
                <Text style={styles.title}>Hoja de Cálculo por Rendimiento {titulo(tipo)}</Text>
                <View style={styles.tbl}>
                    <View style={styles.row}>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Cantidad</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Largo Cm(Veta)</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Ancho Cm</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Tap. Largo</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Tap. Ancho</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Mts Tapacanto</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Total Mts Tapacanto</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>M2</Text>
                        </View>
                    </View>
                    {
                        resultado.map((value, index) => {
                            const { cantidad,
                                    largo,
                                    ancho,
                                    tapLargo,
                                    tapAncho,
                                    mtnTotal,
                                    mtsTapacanto,
                                    m2Totla } = value;
                            return (
                                <View key={index} style={styles.row}>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{cantidad}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{largo}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{ancho}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{tapLargo}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{tapAncho}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{new Intl.NumberFormat("de-DE").format(mtnTotal)}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{new Intl.NumberFormat("de-DE").format(mtsTapacanto)}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{new Intl.NumberFormat("de-DE").format(m2Totla)}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <Text style={styles.total}>M2 {new Intl.NumberFormat("de-DE").format(m2Azul) }</Text>
                <Text style={styles.total}>PZas M2 {new Intl.NumberFormat("de-DE").format(operacion) }</Text>
                <Text style={styles.total}>Cantidad Tablero {new Intl.NumberFormat("de-DE").format(0) }</Text>

            </Page>
        </Document>
    )
};

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    image: {
        width: 170,
        height: 70,
        marginVertical: 15,
        marginHorizontal: 100,
    },
    title: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 25
    },
    tbl: {
        display: 'table',
        flexDirection: 'column',
        width: "auto"
    },
    row: {
        display: 'flex',
       //  minHeight: '40px',
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 10,
        textAlign: 'center',
        // width:10
    },
    cell: {
        flex: '4',
        borderStyle: "solid", 
        borderWidth: 1,
    },
    total:{
        textAlign: 'center',
        fontSize: 15,
        marginTop: 25

    }
});

