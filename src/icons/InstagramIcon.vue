
<template>
  <Icon :iconName="'instagram'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InstagramIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'instagram'
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
