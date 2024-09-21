
<template>
  <Icon :iconName="'police-badge'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoliceBadgeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'police-badge'
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
