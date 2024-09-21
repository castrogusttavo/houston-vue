
<template>
  <Icon :iconName="'cayan-tower'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CayanTowerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cayan-tower'
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
