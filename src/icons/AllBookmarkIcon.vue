
<template>
  <Icon :iconName="'all-bookmark'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AllBookmarkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'all-bookmark'
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
