
<template>
  <Icon :iconName="'globe'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'globe'
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
