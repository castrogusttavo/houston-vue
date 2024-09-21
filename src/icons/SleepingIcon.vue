
<template>
  <Icon :iconName="'sleeping'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SleepingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sleeping'
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
