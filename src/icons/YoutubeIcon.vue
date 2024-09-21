
<template>
  <Icon :iconName="'youtube'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'YoutubeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'youtube'
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
