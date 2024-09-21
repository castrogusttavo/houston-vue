
<template>
  <Icon :iconName="'new-releases'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NewReleasesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'new-releases'
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
