
<template>
  <Icon :iconName="'security'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SecurityIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'security'
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
