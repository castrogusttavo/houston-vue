
<template>
  <Icon :iconName="'teamviewer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TeamviewerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'teamviewer'
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
