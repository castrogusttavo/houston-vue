
<template>
  <Icon :iconName="'umbrella-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UmbrellaDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'umbrella-dollar'
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
