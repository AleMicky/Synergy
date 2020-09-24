import React from 'react';
import { Document, Page, StyleSheet, Text, View, Image } from '@react-pdf/renderer';
import logo from '../assets/Logo.png'
export const Reporte = ({ resultado, total, tipo, m2 }) => {

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
                            <Text style={styles.titulo}>Item</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Descripcion</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Unidad</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Cantidad</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Precio Venta</Text>
                        </View>
                        <View style={styles.cell}>
                            <Text style={styles.titulo}>Total Bs</Text>
                        </View>
                    </View>
                    {
                        resultado.map((value, index) => {
                            const { item,
                                    descripcion,
                                    unidad,
                                    cantiad,
                                    precio_venta,
                                    total } = value;
                            return (
                                <View key={index} style={styles.row}>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{item}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{descripcion}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{unidad}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{cantiad}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{new Intl.NumberFormat("de-DE").format(precio_venta)}</Text>
                                    </View>
                                    <View style={styles.cell}>
                                        <Text style={styles.titulo}>{new Intl.NumberFormat("de-DE").format(total)}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <Text style={styles.total}>Total Bs {new Intl.NumberFormat("de-DE").format(total) }</Text>
                <Text style={styles.total}>Total Bolivianos m2 {new Intl.NumberFormat("de-DE").format(m2) }</Text>

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

