
<template>
  <Icon :iconName="'desk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'desk'
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
