
<template>
  <Icon :iconName="'web-programming'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebProgrammingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-programming'
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
