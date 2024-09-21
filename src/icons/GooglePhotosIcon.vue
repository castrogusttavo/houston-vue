
<template>
  <Icon :iconName="'google-photos'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GooglePhotosIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-photos'
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
