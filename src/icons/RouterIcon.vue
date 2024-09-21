
<template>
  <Icon :iconName="'router'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RouterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'router'
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
