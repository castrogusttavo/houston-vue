
<template>
  <Icon :iconName="'cloud-angled-zap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudAngledZapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-angled-zap'
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
