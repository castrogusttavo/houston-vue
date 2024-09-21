
<template>
  <Icon :iconName="'pause'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PauseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pause'
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
