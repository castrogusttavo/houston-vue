
<template>
  <Icon :iconName="'incognito'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IncognitoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'incognito'
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
