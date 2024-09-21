
<template>
  <Icon :iconName="'slideshare'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SlideshareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'slideshare'
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
