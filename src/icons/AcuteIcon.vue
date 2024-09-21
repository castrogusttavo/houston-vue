
<template>
  <Icon :iconName="'acute'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AcuteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'acute'
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
