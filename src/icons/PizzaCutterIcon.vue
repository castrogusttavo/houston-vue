
<template>
  <Icon :iconName="'pizza-cutter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PizzaCutterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pizza-cutter'
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
