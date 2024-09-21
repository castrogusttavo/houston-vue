
<template>
  <Icon :iconName="'command'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommandIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'command'
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
