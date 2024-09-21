
<template>
  <Icon :iconName="'chimney'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChimneyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chimney'
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
