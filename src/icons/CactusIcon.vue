
<template>
  <Icon :iconName="'cactus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CactusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cactus'
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
