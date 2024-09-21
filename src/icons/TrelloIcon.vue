
<template>
  <Icon :iconName="'trello'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrelloIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'trello'
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
