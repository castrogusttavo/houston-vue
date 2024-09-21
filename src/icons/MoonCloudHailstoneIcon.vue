
<template>
  <Icon :iconName="'moon-cloud-hailstone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonCloudHailstoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-cloud-hailstone'
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
