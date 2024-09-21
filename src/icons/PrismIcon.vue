
<template>
  <Icon :iconName="'prism'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrismIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prism'
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
