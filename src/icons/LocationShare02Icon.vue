
<template>
  <Icon :iconName="'location-share-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LocationShare02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'location-share-02'
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
