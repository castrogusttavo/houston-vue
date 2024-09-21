
<template>
  <Icon :iconName="'milk-carton'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MilkCartonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'milk-carton'
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
