
<template>
  <Icon :iconName="'twin-tower'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TwinTowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'twin-tower'
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
