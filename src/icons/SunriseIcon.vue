
<template>
  <Icon :iconName="'sunrise'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SunriseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sunrise'
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
