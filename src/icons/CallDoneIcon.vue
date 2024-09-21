
<template>
  <Icon :iconName="'call-done'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallDoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-done'
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
