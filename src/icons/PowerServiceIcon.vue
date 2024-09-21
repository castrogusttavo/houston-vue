
<template>
  <Icon :iconName="'power-service'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PowerServiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'power-service'
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
