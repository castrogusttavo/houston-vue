
<template>
  <Icon :iconName="'kettlebell'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'KettlebellIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'kettlebell'
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
