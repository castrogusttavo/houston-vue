
<template>
  <Icon :iconName="'mortar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MortarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mortar'
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
