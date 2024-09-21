
<template>
  <Icon :iconName="'money-saving-jar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySavingJarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-saving-jar'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
