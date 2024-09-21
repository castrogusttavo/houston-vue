
<template>
  <Icon :iconName="'beach'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BeachIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'beach'
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
