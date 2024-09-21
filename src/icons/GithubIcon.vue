
<template>
  <Icon :iconName="'github'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GithubIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'github'
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
