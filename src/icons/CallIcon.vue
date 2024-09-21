
<template>
  <Icon :iconName="'call'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call'
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
