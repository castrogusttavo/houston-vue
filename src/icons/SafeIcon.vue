
<template>
  <Icon :iconName="'safe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SafeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'safe'
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
