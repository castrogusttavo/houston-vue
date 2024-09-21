
<template>
  <Icon :iconName="'longitude'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LongitudeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'longitude'
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
